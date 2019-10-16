'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  const express = require('express');
  const request = require('request');
  app.use(express.json());
  app.post(proxyPath, function(req, res, next) {
    req.body.variables = JSON.stringify(req.body.variables);

    let options = {
      url: 'https://api.yelp.com/v3/graphql',
      headers: {
        Authorization: 'Bearer ZJPEURE6ltpeHdopc_i4b8lT2L0gTe80XauYp_5Ft8Wpv7eAWTZZnkEa6jsYExtf3UKJsoWR1wVUrer28TKxEswRdrv1wtv3hPqE00qggyml4CP3PoO9x-wTxouXXXYx'
      },
      method: 'POST',
      body: req.body,
      json: true
    };

    request(options, function(err, httpResponse, body) {
      res.send(body);
      console.log(err, httpResponse, body);
    });
  });
};
