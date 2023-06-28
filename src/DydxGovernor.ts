import { ponder } from "@/generated";
import { randomInt } from "crypto";

ponder.on("DydxGovernor:ExecutorAuthorized", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("DydxGovernor:ExecutorUnauthorized", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("DydxGovernor:VoteEmitted", async ({ event, context }) => {
  const { submitVote } = context.entities;
  
  await submitVote.create({
    id: event.log.id,
    data: {
      propId: event.params.id,
      address: event.params.voter,
      support: event.params.support,
      votingPower: event.params.votingPower
    }
  });
});

ponder.on("DydxGovernor:ProposalCreated", async ({ event, context }) => {
  const { ProposalCreated } = context.entities;

  await ProposalCreated.create({
    id: event.params.id,
    data: {creator: event.params.creator}
  });
});

ponder.on("DydxGovernor:ProposalExecuted", async ({ event, context}) => {
  const { propExecuted } = context.entities;

  await propExecuted.create({
    id: event.params.id,
    data: {}
  });
});
