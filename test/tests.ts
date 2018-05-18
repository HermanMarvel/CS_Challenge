import { error } from "util";
import { timeout } from "async";
import { forEach } from "async";
import { Config } from "./environment-config";
import { getSchema } from "./domain_schema";
import { EndpointData } from "./endpoint";

const superagent = require("superagent");

const chai = require("chai");
const expect = require("chai").expect;
chai.use(require("chai-json-schema"));

// Dear ContentSquare Team, both tests looks similiar, but I did that with assumption that in
// in real production schemas of endpoints are different and could require different validation approach
// ideally we could implement an Adapter pattern and have set of schemas and set of target endpoints
describe("API Schema Validation", function()  {

    this.timeout(60000);

    const config = new Config().getDefaultConfig();

    before(function() {
        console.log("Launching test suite");
    });

    it("target endpoint A should have the right schema", function(done) {

        const endpointA = config.endpoints[0];

        superagent
        .get(config.targetUrl + endpointA)
        .end((err, res) => {
            console.log("Verifiing endpoint: " + endpointA);

            let totalResources = 0;

            for (const domainJson of JSON.parse(res.text)) {

                expect(domainJson).to.be.jsonSchema(getSchema());

                totalResources++;
            }
            console.log("Total number of resources at endpoint"
                    + endpointA + " is: " + totalResources);
            done();

        });
    });

    it("target endpoint B should have the right schema", function(done) {

        const endpointB = config.endpoints[1];

        superagent
        .get(config.targetUrl + endpointB)
        .end((err, res) => {
            console.log("Verifiing endpoint: " + endpointB);

            let totalResources = 0;

            for (const domainJson of JSON.parse(res.text)) {

                expect(domainJson).to.be.jsonSchema(getSchema());

                totalResources++;
            }
            console.log("Total number of resources at endpoint"
                    + endpointB + " is: " + totalResources);
            done();
        });
    });
});
