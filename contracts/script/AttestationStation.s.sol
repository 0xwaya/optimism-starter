// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {AttestationStation} from "../src/AttestationStation.sol";

import {Script} from "forge-std/Script.sol";


contract AttestationStationScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        AttestationStation counter = new AttestationStation();

        vm.stopBroadcast();
    }
}
