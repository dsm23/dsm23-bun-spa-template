# syntax=docker.io/docker/dockerfile:1@sha256:2780b5c3bab67f1f76c781860de469442999ed1a0d7992a5efdf2cffc0e3d769

# Stage 1: Base image for dependencies and build
FROM oven/bun:1.3.13-slim@sha256:7e8ed3961db1cdedf17d516dda87948cfedbd294f53bf16462e5b57ed3fff0f1 AS base
FROM dhi.io/nginx:1.30.0-alpine3.23@sha256:447db2d0628b7680558b4f303802ccabfacdc6d41fb96f98c9228c1f3fd5c4d0 AS hardened

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

ENV LEFTHOOK=0

# Copy package manager lock files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Stage 2: Build stage
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Bun project
RUN bun run build

# Stage 3: Production image
FROM hardened AS runner

# Copy built static files to nginx's default public folder
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/templates/default.conf.template
