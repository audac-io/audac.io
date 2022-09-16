
function Home() {
  return (
    <div>
      <h2>universal basic income</h2>
      <div>
        <h3>an audacious idea? we think it's one worth exploring.</h3>
        <p><strong>web3</strong>, <strong>blockchain</strong> and <strong>cryptocurrency</strong> provide the how. they make it possible for ordinary people to create an economic solution that benefits everyone. yes, <strong>everyone</strong>. thanks to these giant shoulders, it's not even all that difficult.</p>
      </div>
      <div>
        <h3>what is audac.io and how does it work?</h3>
        <p>
          audac.io is a blockchain cryptocurrency built on the substrate rust framework.
        </p>
        <h4>does audac.io depend on other blockchains?</h4>
        <p>
          audac.io is a level-one, proof-of-stake chain which means that it has no upstream dependencies on a relay chain or virtual machine.
          whilst its source code is based on substrate and cumulus, audac.io can continue to function without upstream activity in those open source projects.
        </p>
        <h4>who keeps audac.io running?</h4>
        <ul>
          <li>
            <strong>everyone and anyone</strong> supports the audac.io network just by using it.
            every time audac.io tokens are sent or received, a very small transaction fee is paid to the validator who process the transaction.
            each time an identity is verified a small fee is paid to the entity who verifies the identity.
            these fees incentivise the independent entities who provide these imperative services for the network.
          </li>
          <li>
            <strong>transaction validators</strong> are independent node operators who process all transactions on the network.
            validating is incentivised by the transaction fees paid to validators for each transaction they process.
            anyone may validate on the network by running a validator node and submitting the validator proof-of-stake bond.
          </li>
          <li>
            <strong>identity verifiers</strong> are independent entities who process identity verifications for the users of the network.
            validating is incentivised by the transaction fees paid to validators for each transaction they process.
            anyone may validate on the network by running a validator node and submitting the validator proof-of-stake bond.
          </li>
        </ul>
        <h4>where does the money come from?</h4>
        <p>
          on blockchains similar to audac.io, the tokens (money) are created at the genesis of the blockchain.
          a written chain specification (chainspec) describes how much token is created and what accounts those tokens are allocated to.
          many well-known blockchains obfuscate the chainspec genesis state for what is generally considered to be technical reasons but which has the side effect of making scrutiny difficult or sometimes impossible.
          this makes it difficult for ordinary people to understnd who is holding the tokens and what the distribution of the total circulation looks like.
        </p>
        <p>
          because the audac.io network is created for the public good, the chain specification is provided without obfuscation in order to encourage scrutiny.
          in total, 30,015,137,092,992.0 (just over thirty trillion) are created in the chainspec.
          which is the number of tokens required to distribute one token per day, to each human, for about ten years.
          most of the token is allocated to a number of faucet accounts which are tasked with token distribution to <em>identified</em> humans.
          an allocation of tokens is also made for payments to identity verifiers. validator payments are taken directly from transaction fees.
          there is no allocation of token for developers or project contributors who are encouraged to run a validator if they require a token income stream.
        </p>
        <p>
          audac.io is not a legal entity in any jurisdiction. it has never sought or received financing from any entity.
          there is no list of sponsors or vc entities to thank. just a community of node operators and technologists.
        </p>
        <p>
          independent node operators facilitate the existence of audac.io by maintaining and paying for the network nodes which they run, as validators on the blockchain.
          anyone may start or stop their own node at any time without obtaining permission from anyone else. this is often referred to as <em>permissionless validating</em>.
          as long as three validators continue to run, anywhere in the world, the network will continue to exist.
          if the number of validators drops below three, block production (and transactions) will pause until the number of validators is again greater than or equal to three.
          if the number of validators falls to zero. the network will cease to exist.
        </p>
        
        <h3>how do i claim my basic income?</h3>
        <ol>
          <li>
            <h4>create a <em>wallet</em></h4>
            <p>
            your wallet is used to receive your universal basic income entitlement.
            it's a digital wallet which uses a passphrase that is special and unique to you.
            as long as you remember your passphrase, you will have access to your funds.
            you can use a physical device, like a smartphone or computer to store your passphrase, but you don't have to.
            you can store your passphrase in your head. your memory is enough to access your funds.
            </p>
          </li>
          <li>
            <h4>verify your <em>identity</em></h4>
            <p>
              your entitlement to universal basic income is linked to <em>living</em>.
              the faucet will atempt to deliver one token per day to each living person.
              since there's only one of you, verifying your identity prevents someone else from pretending to be you in order to claim your income fraudulently.
              it prevents dishonest claims for more income than one person's entitlement.
            </p>
            <p>
              choose an identity verifier that is trustworthy.
              untrustworthy verifiers may become disqualified by acting dishonestly or without due care.
              if this happens, you will need to begin the identity verification process again.
            </p>
          </li>
          <li>
            <h4>link your <em>identity</em> to your <em>wallet</em></h4>
            <p>
              your identity verifier will help you to manage associating your identity with a wallet so that the faucet knows where to send your funds.
              if you lose access to your wallet, you can create a new wallet and associate it with your identity.
              if you lose access to your identity verifier, you can restart the identity verification process with any other qualified identity verifier.
            </p>
          </li>
          <li>
            <h4>allow the <em>faucet</em> to start funding your <em>wallet</em></h4>
            <p>
              the universal basic income faucet will attempt to credit the wallet of each verified identity with one token each day.
              it will continue to do this every day that the identity remains valid until the faucet runs dry ,which will probably happen in 2032 when all tokens have been dispersed.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
