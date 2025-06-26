import {
    LinkBox,
    LinkOverlay,
    Image
} from '@chakra-ui/react'

const TrustBadge = () => {
    return (
        <LinkBox
            id="mlh-trust-badge"
            style={{
              display: 'block',
              maxWidth: '100px',
              minWidth: '60px',
              position: 'fixed',
              right: '50px',
              top: '0',
              width: '10%',
              zIndex: 10000
            }}
        >
        <LinkOverlay
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            isExternal
        >
            <Image
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              style={{ width: '100%' }}
            />
        </LinkOverlay>
    </LinkBox>
  );
}

export default TrustBadge