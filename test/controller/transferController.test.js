// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai')

// Aplicação
const app = require('../../app');
const { equal } = require('assert');

// Mock
const transferService = require('../../service/transferService')// Importando o transferService para o MOCK

// Testes

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando eu tento realizar trabsferencia para um user inexistento recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "testes", 
                    to: "", 
                    amount: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Campos obrigatórios: from, to, amount (number)')
        });
    });
});