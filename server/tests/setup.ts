import { init } from '$/service/app'
import { PORT } from '$/service/envValues'
import { getPrismaClient } from '$/service/getPrismaClient'
import { exec } from 'child_process'
import type { FastifyInstance } from 'fastify'
import util from 'util'
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest'

let server: FastifyInstance

beforeAll(async () => {
  server = init()
  await server.listen({ port: PORT, host: '0.0.0.0' })
})

beforeEach(async () => {
  await util.promisify(exec)('npx prisma migrate reset --force')
  await util.promisify(exec)('npx prisma db seed')
})

afterEach(async () => {
  await getPrismaClient().$disconnect()
})

afterAll(async () => {
  await server.close()
})
