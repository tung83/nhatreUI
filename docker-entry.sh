#!/bin/bash

# wait for Strapi to be up first
bash -c 'while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' web-cms:1337/_health)" != "204" ]]; do sleep 5; done'
yarn dev -H 0.0.0.0

