
# 🧪 Testes Automatizados com Node.js

Este projeto tem como objetivo principal demonstrar como implementar testes automatizados em uma aplicação Node.js, utilizando **Jest** para testes unitários e **Spect (com @nestjs/testing)** para testes de ponta a ponta (E2E).

---

## 📌 Objetivo Geral

Compreender e aplicar testes automatizados para garantir a qualidade do código e prevenir falhas durante a implementação de novas funcionalidades ou recursos.

> **Observação:** Os testes **não devem ser enviados para produção**. Eles são utilizados durante o desenvolvimento e manutenção da aplicação.

---

## 📦 Tecnologias Utilizadas

- Node.js
- NestJS
- Jest
- Supertest
- @nestjs/testing (Spect)

---

## 🧪 Tipos de Testes

### ✅ Testes Unitários

Testam funcionalidades isoladas, como funções ou métodos de serviço.

**Exemplo:**

```ts
// src/math.service.ts
export class MathService {
  sum(a: number, b: number): number {
    return a + b;
  }
}
````

```ts
// test/math.service.spec.ts
import { MathService } from '../src/math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    service = new MathService();
  });

  it('should return the sum of two numbers', () => {
    expect(service.sum(2, 3)).toBe(5);
  });
});
```

---

### 🚀 Testes End-to-End (E2E)

Testam o fluxo completo da aplicação, simulando requisições HTTP.

**Exemplo com NestJS:**

```ts
// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
```

```ts
// test/app.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
```

---

## 🧰 Comandos para Rodar os Testes

### Testes Unitários

```bash
npm run test
```

### Testes End-to-End

```bash
npm run test:e2e
```

### Testes com Watch (modo interativo)

```bash
npm run test:watch
```

---

## 📁 Estrutura Sugerida

```
src/
  └── math.service.ts
  └── app.controller.ts
  └── app.module.ts

test/
  └── math.service.spec.ts    // Teste unitário
  └── app.e2e-spec.ts         // Teste E2E
```

---

## 📝 Boas Práticas

* Escreva testes para toda nova funcionalidade ou refatoração.
* Mantenha a cobertura de código alta e significativa.
* Nomeie os testes de forma clara e objetiva.

---

## 👤 Autor

**Kauã Rodrigo**
Desenvolvedor Front-End | Estagiário em Dados
LinkedIn: [linkedin.com/in/kauarodrigo](https://linkedin.com/in/kauarodrigo)

---

```
