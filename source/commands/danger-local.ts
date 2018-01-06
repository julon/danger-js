#! /usr/bin/env node

import * as program from "commander"

import setSharedArgs, { SharedCLI } from "./utils/sharedDangerfileArgs"
import { runRunner } from "./ci/runner"
import { LocalGit } from "../platforms/local-git"
import { FakeCI } from "../ci_source/providers/Fake"

program.usage("[options]").description("Runs danger without PR metadata, useful for git hooks.")
setSharedArgs(program).parse(process.argv)

const app = (program as any) as SharedCLI
const localPlatform = new LocalGit()
const fakeSource = new FakeCI(process.env)
runRunner(app, { source: fakeSource, platform: localPlatform })
