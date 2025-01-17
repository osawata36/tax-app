import request from 'supertest'

import app from './app'

describe('POST /check-body', function () {
  it('responds with message', async () => {
    const response = await request(app).post('/check-body').send({
      yearsOfService: 5,
      isDisablidy: false,
      isOfficer: false,
      severancePay: 1000000,
    })
    expect(response.status).toBe(200)
  })
})
