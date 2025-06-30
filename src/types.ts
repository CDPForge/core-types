import { GoogleTopicsMap } from "./gTopics";
export interface Product {
    id: string;
    price: number;
    brand?: string;
    category?: string;
    quantity: number;
    currency?: string;
}

export interface Log {
    client: number;
    date: string;
    device: {
        browser?: string;
        id: string;
        ip?: string;
        os?: string;
        type?: string;
        userAgent?: string;
        [key: string]: any;
    };
    event: string;
    geo?: {
        city?: string;
        country?: string;
        point?: {
            type: string;
            coordinates: number[];
        };
        region?: string;
        zipCode?: string;
        timeZone?: string;
        [key: string]: any;
    };
    googleTopics?: GoogleTopic[];
    instance: number;
    page: {
        description?: string;
        href?: string;
        image?: string;
        title: string;
        type?: string;
        [key: string]: any;
    };
    product?: Product[];
    referrer?: string;
    session: string;
    target?: string;
    order?: string;
    [key: string]: any;
}

export interface GoogleTopic {
    id: keyof typeof GoogleTopicsMap;
    name: (typeof GoogleTopicsMap)[keyof typeof GoogleTopicsMap];
}

export interface ConfigMessage {
    inputTopic: string;
    outputTopic?: string;
    plugin: string;
}

export interface Config {
    manager?: {
        url: string;
        config_topic: string;
    };
    plugin?: {
        name: string;
        priority: number;
        type: 'parallel' | 'blocking';
    };
    kafkaConfig?: {
        brokers: string[];
    };
    mysqlConfig?: {
        uri: string;
    };
    [key: string]: any;
}

export interface Event {
    client: number;
    instance: number;
    event: string;
    href: string;
    pageTitle: string;
    pageDescription?: string;
    pageImage?: string;
    pageType?: string;
    referrer?: string;
    timestamp: string;
    did: string;
    session: string;
    gdpr?: string;
    order?: string;
    products?: Product[];
    target?: string;
    oldId?: string;
    newId?: string;
    ExternalIdtype?: string;
    ExternalId?: string;
    userAgent?: string;
    ip?: string;
    topics?: (keyof typeof GoogleTopicsMap)[];
  }