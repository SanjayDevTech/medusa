import { Compiler } from "@biryanihouse/framework/build-tools"
import { logger } from "@biryanihouse/framework/logger"
export default async function build({
  directory,
}: {
  directory: string
}): Promise<boolean> {
  logger.info("Starting build...")
  const compiler = new Compiler(directory, logger)

  const tsConfig = await compiler.loadTSConfigFile()
  if (!tsConfig) {
    logger.error("Unable to compile plugin")
    return false
  }

  const bundler = await import("@biryanihouse/admin-bundler")
  await compiler.buildPluginBackend(tsConfig)
  await compiler.buildPluginAdminExtensions(bundler)
  return true
}
