"options": {
    "headers": {
      "accept": "application/json",
      "content-type": "application/json"
    }
  },
  "operations": [
    {
      "template": {
        "method": "GET",
        "url": "http://10.30.4.50/asterisk_show_agents.php"
      },
      "functions": {
        "getCharacter": [
          "personId"
        ]
      }
    }
  ]
