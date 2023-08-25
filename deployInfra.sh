#!/bin/bash
# AWS credentials file must contain valid credentials or AWS SSO config must have been run

sam build
sam deploy --stack-name origin-624d3b55-824e-43e8-a48f-fde74a4c9d2b --resolve-s3 --debug --no-fail-on-empty-changeset --on-failure DELETE
