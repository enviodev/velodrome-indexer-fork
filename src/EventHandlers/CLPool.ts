import { indexer, CLPool, CLPool_Burn, CLPool_Collect, CLPool_CollectFees, CLPool_Flash, CLPool_IncreaseObservationCardinalityNext, CLPool_Initialize, CLPool_Mint, CLPool_SetFeeProtocol, CLPool_Swap } from "envio";

indexer.onEvent(
  { contract: "CLPool", event: "Burn" },
  async ({ event, context }) => {
  const entity: CLPool_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    tickLower: event.params.tickLower,
    tickUpper: event.params.tickUpper,
    amount: event.params.amount,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_Burn.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "Collect" },
  async ({ event, context }) => {
  const entity: CLPool_Collect = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    recipient: event.params.recipient,
    tickLower: event.params.tickLower,
    tickUpper: event.params.tickUpper,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_Collect.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "CollectFees" },
  async ({ event, context }) => {
  const entity: CLPool_CollectFees = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_CollectFees.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "Flash" },
  async ({ event, context }) => {
  const entity: CLPool_Flash = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    paid0: event.params.paid0,
    paid1: event.params.paid1,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_Flash.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "IncreaseObservationCardinalityNext" },
  async ({ event, context }) => {
    const entity: CLPool_IncreaseObservationCardinalityNext = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      observationCardinalityNextOld: event.params.observationCardinalityNextOld,
      observationCardinalityNextNew: event.params.observationCardinalityNextNew,
      sourceAddress: event.srcAddress,
      timestamp: new Date(event.block.timestamp * 1000),
      chainId: event.chainId,
    };

    context.CLPool_IncreaseObservationCardinalityNext.set(entity);
  }
);

indexer.onEvent(
  { contract: "CLPool", event: "Initialize" },
  async ({ event, context }) => {
  const entity: CLPool_Initialize = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sqrtPriceX96: event.params.sqrtPriceX96,
    tick: event.params.tick,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_Initialize.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "Mint" },
  async ({ event, context }) => {

  const entity: CLPool_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    transactionHash: event.transaction.hash,
    owner: event.params.owner,
    tickLower: event.params.tickLower,
    tickUpper: event.params.tickUpper,
    amount: event.params.amount,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_Mint.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "SetFeeProtocol" },
  async ({ event, context }) => {
  const entity: CLPool_SetFeeProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeProtocol0Old: event.params.feeProtocol0Old,
    feeProtocol1Old: event.params.feeProtocol1Old,
    feeProtocol0New: event.params.feeProtocol0New,
    feeProtocol1New: event.params.feeProtocol1New,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_SetFeeProtocol.set(entity);
}
);

indexer.onEvent(
  { contract: "CLPool", event: "Swap" },
  async ({ event, context }) => {
  const entity: CLPool_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sqrtPriceX96: event.params.sqrtPriceX96,
    liquidity: event.params.liquidity,
    tick: event.params.tick,
    sourceAddress: event.srcAddress,
    timestamp: new Date(event.block.timestamp * 1000),
    chainId: event.chainId,
  };

  context.CLPool_Swap.set(entity);
}
);
