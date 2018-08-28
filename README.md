# iota-node-middleware running in docker image. 

This image is developed to simplify interaction between running iota node and any other application. It wraps methods "getInputs", "getNewAddress", "getNodeInfo", "sendTransfer" of standard iota.lib.js library.

docker-compose example

    iota-node-middleware:
      image: alekserok/iota-node-middleware
      container_name: someservice-iota-node-middleware
      environment:
        - PORT=3000
        - IOTA_PROVIDER=http://user:password@iotaledger:14265
      ports:
        - "3000:3000"
where PORT is the port where middleware is listening to requests and IOTA_PROVIDER is running iri node (username and password is optional). 

### Available methods:

#### POST /info
##### request
```json
{}
```
##### response
```json
{
    "appName": "IRI",
    "appVersion": "1.5.3",
    "jreAvailableProcessors": 6,
    "jreFreeMemory": 3580485960,
    "jreVersion": "1.8.0_181",
    "jreMaxMemory": 11464605696,
    "jreTotalMemory": 8248098816,
    "latestMilestone": "ZWHYJJZEMQHPUHBIAR9LZZAN9EVWRSPQCKKPJMDZERSPOUSRVIKXPOYWKBRXNHTW9IJTPSFEWKPW99999",
    "latestMilestoneIndex": 718740,
    "latestSolidSubtangleMilestone": "ZWHYJJZEMQHPUHBIAR9LZZAN9EVWRSPQCKKPJMDZERSPOUSRVIKXPOYWKBRXNHTW9IJTPSFEWKPW99999",
    "latestSolidSubtangleMilestoneIndex": 718740,
    "milestoneStartIndex": 338000,
    "neighbors": 9,
    "packetsQueueSize": 0,
    "time": 1535463191983,
    "tips": 5880,
    "transactionsToRequest": 146,
    "duration": 0
}
```

#### POST /account
##### request
```json
{
    "seed":"CDKCXTOZHJRLQVUPHWXRNRYWWOQQYKYLSUNBHZUKPEPKDOK9JMQHUPL9RHVLJJZQRLMMZOSLRZMBBBAGH
}
```
##### response
```json
{
    "inputs": [
        {
            "address": "DIWKWXULSJYCFSRQVCBQTETV9VEDBHRINXEBYNTFFDBZNGYSSSOYPPONMLOHZMQVRASWFQLGAJTSRSEZC",
            "balance": 24,
            "keyIndex": 2,
            "security": 2
        }
    ],
    "totalBalance": 24
}
```

#### POST /address
##### request
```json
{
    "seed":"CDKCXTOZHJRLQVUPHWXRNRYWWOQQYKYLSUNBHZUKPEPKDOK9JMQHUPL9RHVLJJZQRLMMZOSLRZMBBBAGH
}
```
##### response
```json
"MKTBFNNWXGPXPX9UWGHFL9VTOSTVCWDIFORQFWEIVEFCQWSWQOBRWJUCAKHJNHDIRZDOHXIHLSGVXTRJC9KMJEZZOX"
```

#### POST /withdraw
##### request
```json
{
    "seed":"CDKCXTOZHJRLQVUPHWXRNRYWWOQQYKYLSUNBHZUKPEPKDOK9JMQHUPL9RHVLJJZQRLMMZOSLRZMBBBAGH",
    "address":"MKTBFNNWXGPXPX9UWGHFL9VTOSTVCWDIFORQFWEIVEFCQWSWQOBRWJUCAKHJNHDIRZDOHXIHLSGVXTRJC9KMJEZZOX",
    "amount":"1",
    "commissionAddress": "optional address to take comission for transactions",
    "commission": optional commission value
}
```
##### response
```json
"VEULCWUPDMBEEG9SCJLETIEFDLOIURNFTSOXOEUAHJVOYLPLAWJVHPXMKSJDKFXOPLAR9PCLFPKEZ9999"
```
