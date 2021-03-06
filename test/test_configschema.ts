/*
Copyright 2018 matrix-appservice-discord

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as yaml from "js-yaml";
import * as Chai from "chai";
import { ConfigValidator } from "matrix-appservice-bridge";

// we are a test file and thus need those
/* tslint:disable:no-unused-expression max-file-line-count no-any */

const expect = Chai.expect;

describe("ConfigSchema", () => {
    const validator = new ConfigValidator("./config/config.schema.yaml");
    it("should successfully validate a minimal config", () => {
        const yamlConfig = yaml.safeLoad(`
            bridge:
                domain: localhost
                homeserverUrl: "http://localhost:8008"
            auth:
                clientID: foo
                botToken: foobar`);
        validator.validate(yamlConfig);
    });
    it("should successfully validate the sample config", () => {
         validator.validate("./config/config.sample.yaml");
    });
});
