# @cdp-forge/types

TypeScript type definitions for the CDP Forge Plugin Pipeline SDK.

## 📦 Installation

```bash
npm install @cdp-forge/types
```

## 🚀 Usage

```typescript
import { 
    Log, 
    Product, 
    GoogleTopic,
    ConfigMessage,
    Config 
} from '@cdp-forge/types';

// Use the types in your plugin
const log: Log = {
    client: 1,
    date: "2024-01-01T00:00:00Z",
    device: {
        id: "device-123"
    },
    event: "page_view",
    instance: 1,
    page: {
        title: "Homepage"
    },
    session: "session-123"
};

// Type your configuration
const config: Config = {
    kafkaConfig: {
        brokers: ['localhost:9092']
    },
    manager: {
        url: 'https://manager.example.com',
        config_topic: 'config'
    },
    plugin: {
        name: 'myPlugin',
        priority: 1,
        type: 'blocking'
    }
};
```

## 📋 Available Types

### Core Types
- `Log` - Main log object structure
- `Product` - Product information
- `GoogleTopic` - Google topics data
- `ConfigMessage` - Configuration messages
- `Config` - Complete configuration structure

### Google Topics
- `GoogleTopicsMap` - Map of Google topics with their names

## 🔗 Related

- [@cdp-forge/core](https://www.npmjs.com/package/@cdp-forge/core) - Main CDP Forge package

## �� License

GPL-3.0
