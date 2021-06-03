---
title: SpinupWP v1.0.0
language_tabs:
  - shell: cURL
  - php: PHP
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="spinupwp">SpinupWP v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

SpinupWP REST API documentation.

Base URLs:

* <a href="https://api.spinupwp.app/v1">https://api.spinupwp.app/v1</a>

Email: <a href="mailto:sudo@spinupwp.com">Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="spinupwp-sites">Sites</h1>

Manage sites.

## addSite

<a id="opIdaddSite"></a>

`POST /sites`

*Create a Site*

> Body parameter

```json
{
  "required": [
    "server_id",
    "domain"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "format": "int64",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="addsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Site](#schemasite)|true|Site object that needs to be created.|

> Example responses

> 200 Response

```json
{
  "required": [
    "server_id",
    "domain"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "format": "int64",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="addsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Site](#schemasite)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Invalid input|None|

<h3 id="addsite-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__sites_{siteId}

`GET /sites/{siteId}`

*Retrieve a Site*

Returns a single site.

<h3 id="get__sites_{siteid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|integer(int64)|true|ID of site to return|

> Example responses

> 200 Response

```json
{
  "required": [
    "server_id",
    "domain"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "format": "int64",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="get__sites_{siteid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Site](#schemasite)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Site not found|None|

<h3 id="get__sites_{siteid}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteSite

<a id="opIddeleteSite"></a>

`DELETE /sites/{siteId}`

*Deletes a Site*

<h3 id="deletesite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|integer(int64)|true|Site ID to delete|

> Example responses

<h3 id="deletesite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Site not found|None|

<h3 id="deletesite-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "required": [
    "server_id",
    "domain"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "format": "int64",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|none|
|server_id|integer(int64)|true|none|none|
|domain|string|true|none|none|

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "type": "object",
  "properties": {
    "event_id": {
      "type": "integer",
      "format": "int32"
    },
    "data": {
      "type": "array"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|integer(int32)|false|none|none|
|data|array|false|none|none|

