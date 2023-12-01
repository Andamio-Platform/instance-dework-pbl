import { AndamioConfig, CourseManagementConfig, ProjectManagementConfig } from "@andamiojs/core";

// Project Management
// import { escrows } from "./escrow";

<<<<<<< HEAD

=======
import treasury from "../cardano/plutus/treasury.json"
import contributorReference from "../cardano/plutus/contributorReference.json"
import contributorMintingReference from "../cardano/plutus/contributorMintingReference.json"
import contractTokenMintingReference from "../cardano/plutus/contractTokenMintingReference.json"
import escrowDecider1 from "../cardano/plutus/escrowDecider1.json"
import escrowDecider2 from "../cardano/plutus/escrowDecider2.json"
>>>>>>> upstream/main

// Course Management
import assignment from "../cardano/plutus/assignment.json"
import courseReference from "../cardano/plutus/courseReference.json"
import learnerReference from "../cardano/plutus/learnerReference.json"
import learnerMintingReference from "../cardano/plutus/learnerMintingReference.json"
import moduleMintingReference from "../cardano/plutus/moduleMintingReference.json"

// Tokens
import courseManagementTokens from './courseManagementTokens.json'
import projectManagementTokens from './projectManagementTokens.json'

export const andamioConfig: AndamioConfig<CourseManagementConfig> = {
  title: "Dework PBL",
  baseAddress: "",
  enterpriseAddress: "",
  rewardAddress: "",
  // at the moment, each contract has a different reference UTxO Address - see individual contract configs
  // referenceScriptAddress: '',
  metadataKey: "",
  network: "0",
  config: {
    assignment: assignment,
    courseReference: courseReference,
    learnerReference: learnerReference,
    learnerMintingReference: learnerMintingReference,
    moduleMintingReference: moduleMintingReference,
    courseManagementTokens: courseManagementTokens,
    coursemanagementNftArtwork: {
      // Update Me!
      learnerNFTURL: "ipfs://bafkreidqhvdxgcgd2lq4zihg376bpbwc7di655vc34ck6ex3qggdnomscy",
      courseModuleNFTURL: "ipfs://www.andamio.io/andamio.png",
      courseCreatorNFTURL: "ipfs://bafkreia5krw4q4tx4whihrf5byvtfgjuai45s6v63vl6mlizhpd4j62yiu",
      courseDeciderNFTURL: "ipfs://bafkreicyijhoyivlfhcxnnnqs2cmzz5wgqukg5fwuq3z6za6kiab2pbsia",
    },
<<<<<<< HEAD
=======
    contributorReference: contributorReference,
    escrows: [escrowDecider1, escrowDecider2],
    treasury: treasury,
    contractTokenMintingReference: contractTokenMintingReference,
    contributorMintingReference: contributorMintingReference,
    projectManagementTokens: projectManagementTokens,
>>>>>>> upstream/main
  },
};