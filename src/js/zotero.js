// @see https://github.com/tnajdek/zotero-api-client
import api from 'zotero-api-client'

const { default: api } = ZoteroApiClient;

const response = await.api().library('user', 475425).collections('9KH9TNSJ').items().get();

console.log(items.map(i => i.title));