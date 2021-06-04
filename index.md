---
title: SpinupWP REST API v1.0
language_tabs:
  - shell: cURL
  - php: PHP
toc_footers:
  - <a href="https://spinupwp.com/docs">SpinupWP Documentation</a>
includes:
  - errors.md
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="spinupwp-rest-api">SpinupWP REST API</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

SpinupWP REST API documentation.

Base URLs:

* <a href="https://api.spinupwp.app/v1">https://api.spinupwp.app/v1</a>

Email: <a href="mailto:sudo@spinupwp.com">Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="spinupwp-rest-api-servers">Servers</h1>

The servers API allows you to view servers.

## Retrieve a server

<a id="opIdgetServer"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://api.spinupwp.app/v1/servers/{id} \
  -H 'Authorization: Bearer {access-token}'

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.spinupwp.app/v1/servers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`GET /servers/{id}`

<h3 id="retrieve-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|None|

## List all servers

<a id="opIdgetServers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://api.spinupwp.app/v1/servers \
  -H 'Authorization: Bearer {access-token}'

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.spinupwp.app/v1/servers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`GET /servers`

<h3 id="list-all-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|None|

<h1 id="spinupwp-rest-api-sites">Sites</h1>

The sites API allows you to create, view, and delete sites.

## Retrieve a Site

> Code samples

```shell
# You can also use wget
curl -X GET https://api.spinupwp.app/v1/sites/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.spinupwp.app/v1/sites/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`GET /sites/{id}`

Returns a single site.

<h3 id="retrieve-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|integer|true|ID of site to return|

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
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="retrieve-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Site](#schemasite)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Site not found|None|

<h3 id="retrieve-a-site-responseschema">Response Schema</h3>

## Delete a Site

<a id="opIddeleteSite"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://api.spinupwp.app/v1/sites/{id} \
  -H 'Authorization: Bearer {access-token}'

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://api.spinupwp.app/v1/sites/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`DELETE /sites/{id}`

<h3 id="delete-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|integer|true|Site ID to delete|

> Example responses

<h3 id="delete-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Site not found|None|

<h3 id="delete-a-site-responseschema">Response Schema</h3>

## Create a Site

<a id="opIdaddSite"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://api.spinupwp.app/v1/sites \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://api.spinupwp.app/v1/sites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`POST /sites`

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
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="create-a-site-parameters">Parameters</h3>

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
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="create-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Site](#schemasite)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Invalid input|None|

<h3 id="create-a-site-responseschema">Response Schema</h3>

## List all Sites

> Code samples

```shell
# You can also use wget
curl -X GET https://api.spinupwp.app/v1/sites \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.spinupwp.app/v1/sites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`GET /sites`

List all single site.

<h3 id="list-all-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server_id|path|integer|false|Filter by Server ID|

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
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
      "example": 1
    },
    "domain": {
      "type": "string",
      "example": "hellfish.media"
    }
  }
}
```

<h3 id="list-all-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Site](#schemasite)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Site not found|None|

<h3 id="list-all-sites-responseschema">Response Schema</h3>

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
      "readOnly": true
    },
    "server_id": {
      "type": "integer",
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
|id|integer|false|read-only|none|
|server_id|integer|true|none|none|
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
      "type": "integer"
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
|event_id|integer|false|none|none|
|data|array|false|none|none|

