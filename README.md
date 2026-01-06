# @ts-core/crypto-gost

Библиотека для работы с криптографическими алгоритмами на основе российских стандартов ГОСТ (ГОСТ Р 34.10, ГОСТ Р 34.11). Предоставляет инструменты для генерации ключей, подписи сообщений, проверки подписей, шифрования и расшифровки данных.

## Установка

```bash
npm install @ts-core/crypto-gost
```

## Зависимости

- `@ts-core/common` — базовые классы и интерфейсы
- `@vostokplatform/crypto-gost-js` — реализация криптографических алгоритмов ГОСТ

## Основные классы

### GostR3410

Реализация алгоритма электронной подписи ГОСТ Р 34.10-2012.

```typescript
import { GostR3410 } from '@ts-core/crypto-gost';

// Генерация пары ключей
const keys = await GostR3410.keys();
console.log(keys.privateKey);  // Приватный ключ (hex)
console.log(keys.publicKey);   // Публичный ключ (hex)

// Подпись сообщения
const message = 'Hello, World!';
const signature = await GostR3410.sign(message, keys.privateKey);

// Проверка подписи
const isValid = await GostR3410.verify(message, signature, keys.publicKey);
console.log(isValid);  // true
```

### GostR3411

Реализация хеш-функции ГОСТ Р 34.11-2012 (Стрибог).

```typescript
import { GostR3411 } from '@ts-core/crypto-gost';

// Генерация пары ключей
const keys = await GostR3411.keys();
```

### Шифрование и расшифровка

Асимметричное шифрование с использованием алгоритмов ГОСТ:

```typescript
import { GostR3410 } from '@ts-core/crypto-gost';

// Генерация ключей для отправителя и получателя
const senderKeys = await GostR3410.keys();
const receiverKeys = await GostR3410.keys();

// Генерация nonce
const nonce = GostR3410.nonce();

// Шифрование сообщения
const message = 'Секретное сообщение';
const encrypted = await GostR3410.encrypt(
    message,
    senderKeys.privateKey,
    receiverKeys.publicKey,
    nonce
);

// Расшифровка сообщения
const decrypted = await GostR3410.decrypt(
    encrypted,
    receiverKeys.privateKey,
    senderKeys.publicKey,
    nonce
);
console.log(decrypted);  // 'Секретное сообщение'
```

### TransportCryptoManagerGostR3410

Менеджер криптографии для подписи и верификации транспортных команд:

```typescript
import { TransportCryptoManagerGostR3410 } from '@ts-core/crypto-gost';

const cryptoManager = new TransportCryptoManagerGostR3410();

// Подпись команды
const signature = await cryptoManager.sign(command, nonce, privateKey);

// Верификация команды
const isValid = await cryptoManager.verify(command, {
    value: signature,
    nonce: nonce,
    publicKey: publicKey
});
```

## API Reference

### GostR3410

| Метод | Описание |
|-------|----------|
| `keys(): Promise<IKeyAsymmetric>` | Генерация пары асимметричных ключей |
| `nonce(): string` | Генерация случайного nonce (8 байт) |
| `sign(message, privateKey): Promise<string>` | Подпись сообщения |
| `verify(message, signature, publicKey): Promise<boolean>` | Проверка подписи |
| `encrypt(message, senderPrivateKey, receiverPublicKey, nonce): Promise<IGostEncrypted>` | Шифрование сообщения |
| `decrypt(message, receiverPrivateKey, senderPublicKey, nonce): Promise<string>` | Расшифровка сообщения |

### IGostEncrypted

```typescript
interface IGostEncrypted {
    data: string;  // Зашифрованные данные (hex)
    key: string;   // Зашифрованный ключ шифрования (hex)
}
```

### IKeyAsymmetric

```typescript
interface IKeyAsymmetric {
    privateKey: string;  // Приватный ключ (hex)
    publicKey: string;   // Публичный ключ (hex)
}
```

## Алгоритмы

- **ГОСТ Р 34.10-2012** — алгоритм электронной цифровой подписи
- **ГОСТ Р 34.11-2012** — алгоритм хеширования (Стрибог)
- **ГОСТ 28147-89** — блочный шифр для симметричного шифрования

## Применение

- Системы электронного документооборота
- Защита персональных данных
- Банковские и финансовые системы
- Государственные информационные системы
- Любые системы, требующие соответствия российским криптографическим стандартам

## Автор

**Renat Gubaev** — [renat.gubaev@gmail.com](mailto:renat.gubaev@gmail.com)

- GitHub: [ManhattanDoctor](https://github.com/ManhattanDoctor)
- Repository: [ts-core-crypto-gost](https://github.com/ManhattanDoctor/ts-core-crypto-gost)

## Лицензия

ISC
