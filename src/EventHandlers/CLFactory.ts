import { indexer, CLFactory, CLFactory_PoolCreated } from "envio";

indexer.contractRegister(
  { contract: "CLFactory", event: "PoolCreated" },
  async ({ event, context }) => {
  context.chain.CLPool.add(event.params.pool);
}
);

indexer.onEvent(
  { contract: "CLFactory", event: "PoolCreated" },
  async ({ event, context }) => {
  const entity: CLFactory_PoolCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    tickSpacing: event.params.tickSpacing,
    pool: event.params.pool,
    timestamp: new Date(event.block.timestamp * 1000), // Convert to Date
    chainId: event.chainId,
  };

  context.CLFactory_PoolCreated.set(entity);
}
);