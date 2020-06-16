(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(9),s=(n(0),n(153)),o={id:"yubihsm",title:"YubiHSM"},r={id:"yubihsm",title:"YubiHSM",description:"What is YubiHSM2?",source:"@site/../docs/yubihsm.md",permalink:"/docs/yubihsm",editUrl:"https://github.com/ecadlabs/signatory/edit/master/website/../docs/yubihsm.md",sidebar:"someSidebar",previous:{title:"File-Based Secret Storage (Insecure)",permalink:"/docs/filebased"},next:{title:"Azure KMS",permalink:"/docs/azure_kms"}},c=[{value:"Setup with Signatory",id:"setup-with-signatory",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing and using the YubiHSM Connector and Shell",id:"installing-and-using-the-yubihsm-connector-and-shell",children:[]},{value:"Connecting to the YubiHSM2 device with yubihsm-shell",id:"connecting-to-the-yubihsm2-device-with-yubihsm-shell",children:[]},{value:"Importing a Secret key into the YubiHSM2 for Tezos",id:"importing-a-secret-key-into-the-yubihsm2-for-tezos",children:[]},{value:"Listing Tezos Addresses in the YubiHSM2",id:"listing-tezos-addresses-in-the-yubihsm2",children:[]},{value:"Configuring your newly imported address",id:"configuring-your-newly-imported-address",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"what-is-yubihsm2"},"What is YubiHSM2?"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Taken from the ",Object(s.b)("a",Object(i.a)({parentName:"em"},{href:"https://www.yubico.com/products/hardware-security-module/"}),"Yubico website"))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"The YubiHSM 2 is a Hardware Security Module that is within reach of all organizations. It provides advanced cryptography, including hashing, asymmetric and symmetric key cryptography, to protect the cryptographic keys that secure critical applications, identities, and sensitive data in an enterprise for certificate authorities, databases, code signing and more.")),Object(s.b)("p",null,"YubiHSM2 is a hardware-based HSM device. This device is suitable for use where you have access to your physical servers."),Object(s.b)("h2",{id:"setup-with-signatory"},"Setup with Signatory"),Object(s.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"In this guide, we make use of Docker for convenience, but you are not required to use Docker."),Object(s.b)("p",null,"This documentation assumes that you will be running signatory and the YubiHSM2 device on the same physical server."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A Linux system operably configured with:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Docker"),Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developers.yubico.com/YubiHSM2/Releases/"}),"yubihsm2 sdk")," version 2012.12 or later installed. This documentation assumes you are using Docker on Debian."))),Object(s.b)("li",{parentName:"ul"},"A YubiHSM device connected to your server. (See the output of ",Object(s.b)("inlineCode",{parentName:"li"},"lsusb")," to verify)")),Object(s.b)("h3",{id:"installing-and-using-the-yubihsm-connector-and-shell"},"Installing and using the YubiHSM Connector and Shell"),Object(s.b)("p",null,"Signatory uses the ",Object(s.b)("inlineCode",{parentName:"p"},"yubihsm-connector")," daemon to interact with the YubiHSM USB device."),Object(s.b)("p",null,"The connector requires you to have the libusd package installed on your system."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"apt-get install libusb-1.0-0\n")),Object(s.b)("p",null,"To install the connector from the, find and install the "),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"dpkg -i yubihsm-connector_2.1.0-1_amd64.deb\n")),Object(s.b)("p",null,"To manage the YubiHSM2 device, you will need the ",Object(s.b)("inlineCode",{parentName:"p"},"yubihsm-shell")," utility. This utility requires the installation of the ",Object(s.b)("inlineCode",{parentName:"p"},"libedit2")," package."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"apt-get install libedit2\n")),Object(s.b)("p",null,"To install yubihsm-shell, you must install the yubihsm-shell package and the supporting YubiHSM2 libraries. The ",Object(s.b)("inlineCode",{parentName:"p"},"yubihsm-shell")," is not required for the operation of signatory and is only for the management of the YubiHSM2 device."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"dpkg -i yubihsm-shell_2.0.2-1_amd64.deb \\\n    libyubihsm1_2.0.2-1_amd64.deb \\\n    libyubihsm-http1_2.0.2-1_amd64.deb \\\n    libyubihsm-usb1_2.0.2-1_amd64.deb\n")),Object(s.b)("h3",{id:"connecting-to-the-yubihsm2-device-with-yubihsm-shell"},"Connecting to the YubiHSM2 device with yubihsm-shell"),Object(s.b)("p",null,"Start the ",Object(s.b)("inlineCode",{parentName:"p"},"yubihsm-connector")),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"yubihsm-connector\n")),Object(s.b)("p",null,"Run the command ",Object(s.b)("inlineCode",{parentName:"p"},"yubihsm-shell"),". You will get a prompt that looks like:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"yubihsm>\n")),Object(s.b)("p",null,"To connect to the device type ",Object(s.b)("inlineCode",{parentName:"p"},"connect"),". It will automatically connect to localhost."),Object(s.b)("p",null,'To open a new session with the device type. The default password on the YubiHSM2 is "password".'),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"yubihsm> session open 1 password\n")),Object(s.b)("p",null,"To list all objects on the device run the command."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"yubihsm> list objects 0 0\n")),Object(s.b)("h3",{id:"importing-a-secret-key-into-the-yubihsm2-for-tezos"},"Importing a Secret key into the YubiHSM2 for Tezos"),Object(s.b)("p",null,"To import a secret key, we will use the ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli")," command."),Object(s.b)("p",null,'Here are six examples of private keys for test/evaluation purposes. Three encrypted (password is "test") and three unencrypted.'),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[ { "name": "ed25519_encrypted",\n    "value":\n      "encrypted:edesk1GXwWmGjXiLHBKxGBxwmNvG21vKBh6FBxc4CyJ8adQQE2avP5vBB57ZUZ93Anm7i4k8RmsHaPzVAvpnHkFF" },\n  { "name": "secp256k1_encrypted",\n    "value":\n      "encrypted:spesk24UQkAiJk8X6AufNtRv1WWPp2BAssEgmijCTQPMgUXweSKPmLdbyAjPmCG1pR2dC9P5UZZVeZcb7zVodUHZ" },\n  { "name": "p256_encrypted",\n    "value":\n      "encrypted:p2esk28hoUE2J88QNFj2aDX2pjzL7wcVh2g8tkEwtWWguby9M3FHUgSbzvF2Sd7wQ4Kd8crFwvto6gF3otcBuo4T" },\n  { "name": "p256_unencrypted",\n    "value":\n      "unencrypted:p2sk3HdQc93EjixRAWs9WZ6b3spNgPD7VriXU8FH8EiHN8sxCh7gmv" },\n  { "name": "secp256k1_unencrypted",\n    "value":\n      "unencrypted:spsk2Fiz7sGP5fNMJrokp6ynTa4bcFbsRhw58FHXbNf5ProDNFJ5Xq" },\n  { "name": "ed25516_unencrypted",\n    "value":\n      "unencrypted:edsk2rKA8YEExg9Zo2qNPiQnnYheF1DhqjLVmfKdxiFfu5GyGRZRnb" } ]\n')),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli")," command needs a configuration file. The following will suffice;"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  address: localhost:6732\n  utility_address: localhost:9583\n\nvaults:\n  # Name is used to identify backend during import process\n  yubi:\n    driver: yubihsm\n    config:\n      address: localhost:12345 # Address for the yubihsm-connector\n      password: password\n      auth_key_id: 1\n")),Object(s.b)("p",null,'To import a secret key, we take the secret key from the above json examples. Do not include the "encrypted:" or "unencrypted:" prefix.'),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"signatory-cli import --config ./signatory.yaml --vault yubi edsk2rKA8YEExg9Zo2qNPiQnnYheF1DhqjLVmfKdxiFfu5GyGRZRnb \n")),Object(s.b)("p",null,"If the import is successful, the ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli")," will report the PKH of your newly imported secret:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'INFO[0000] Initializing vault                            vault=yubihsm vault_name=yubi\nINFO[0000] Requesting import operation                   pkh=tz1SBhzLDp9Jvg98ztMZMstaKbAENmzRd4Y7 vault=YubiHSM vault_name="localhost:12345/1"\nINFO[0000] Successfully imported                         key_id=0cf8 pkh=tz1SBhzLDp9Jvg98ztMZMstaKbAENmzRd4Y7 vault=YubiHSM vault_name="localhost:12345/1"\n')),Object(s.b)("p",null,"If you import an encrypted key, the ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli")," command will prompt you for a password."),Object(s.b)("p",null,"You can use the ",Object(s.b)("inlineCode",{parentName:"p"},"yubihsm-shell")," utility command ",Object(s.b)("inlineCode",{parentName:"p"},"list objects 0 0")," to verify that you can also see your newly imported secret within the YubiHSM2 device."),Object(s.b)("h3",{id:"listing-tezos-addresses-in-the-yubihsm2"},"Listing Tezos Addresses in the YubiHSM2"),Object(s.b)("p",null,"You can use the command ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli list")," to list all keys in the YubiHSM2. ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli")," also prints the configuration status for each address"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"signatory-cli -c ./signatory.yaml list\nPublic Key Hash:    tz1SBhzLDp9Jvg98ztMZMstaKbAENmzRd4Y7\nVault:              YubiHSM\nID:                 0cf8\nStatus:             Disabled\n")),Object(s.b)("h3",{id:"configuring-your-newly-imported-address"},"Configuring your newly imported address"),Object(s.b)("p",null,"Add the PKH for your new secret into the ",Object(s.b)("inlineCode",{parentName:"p"},"tezos:")," block of your ",Object(s.b)("inlineCode",{parentName:"p"},"signatory.yaml")," file as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  address: localhost:6732\n  utility_address: localhost:9583\n\nvaults:\n  # Name is used to identify backend during import process\n  yubi:\n    driver: yubihsm\n    config:\n      address: localhost:12345 # Address for the yubihsm-connector\n      password: password\n      auth_key_id: 1\ntezos:\n  tz1SBhzLDp9Jvg98ztMZMstaKbAENmzRd4Y7:\n    log_payloads: true\n    allowed_operations:\n      - generic\n    allowed_kinds:\n      - origination\n")),Object(s.b)("p",null,"Rerun the ",Object(s.b)("inlineCode",{parentName:"p"},"signatory-cli list")," command to verify that your new address is getting picked up, and is configured as you expect."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"signatory-cli -c ./signatory.yaml list\nPublic Key Hash:    tz1SBhzLDp9Jvg98ztMZMstaKbAENmzRd4Y7\nVault:              YubiHSM\nID:                 0cf8\nStatus:             Active\nAllowed Operations: [generic]\nAllowed Kinds:      [ballot]\n")))}b.isMDXComponent=!0}}]);