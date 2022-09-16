
function Identity() {
  return (
    <div>
      <h2>identity</h2>
      <p>
        identity in the context of universal basic income is linked to <strong>life</strong>. more specifically: birth, living and death.
        it is important for the success of this project that people are not able to create multiple identities and claim more than a single person's daily entitlement.
        it is unimportant for an identity on this network to broadcast personal details like name, age, gender, nationality, ethnicity. an identity verifier may need to understand those things, but the larger, basic income network, does not need or require that information.
      </p>
      <h2>guardianship</h2>
      <p>
        the legal guardian of a minor or other person under guardianship, may maintain the wallet and identity of those under their care and spend or otherwise distribute the daily allowance of those under their care.
        legal guardianship is determined by the laws and customs of an individual's residential jurisdiction.
      </p>
      <h2>verifier</h2>
      <p>
        an identity verifier is an entity which verifies the identity of people in such a way that prevents the creation of multiple identities for the same person and that invalidates the identity in the event that the person ceases to remain living.
        it can do this in any way that is feasible.
        some examples of ways to validate identity might be:
      </p>
      <ul>
        <li>
          to collect and validate a birth certificate and then to collect evidence that the presenter of the certificate is the person named on the certificate.
        </li>
        <li>
          to collect a biometric identifier like a retina scan or fingerprint or a combination of biometric identifiers.
        </li>
      </ul>
      <p>
        within the context of decentralisation, the network does not impose any requirement other than a <strong>bond</strong> on an identity verifier. the bond amount is equivalent to one token per day per identity
        it is left to each individual to select an identity verifier and to select one that is honest, efficient and meets the needs of those whose identities they verify.
      </p>
      <p>
        an identity verifier must pay a bond at the time of verifier registration. this bond and verifier status may be forfeit if the verifier produces invalid identity verifications.
      </p>
      <p>
        anyone may challenge the verification of any identity and present evidence of the invalidity of a verification. an arbitrator (any other identity verifier) will examine the challenge and provide a judgement on the validity of the verification being challenged. if the challenge is deemed valid, the issuer of the invalid verification will forfeit a portion of their bond and must replace that portion in order to retain verifier status.
      </p>
    </div>
  );
}

export default Identity;
