import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pantherswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem
        id="pool-nav-link"
        as="a"
        href="https://charts.bogged.finance/0x7e8DB69dcff9209E486a100e611B0af300c3374e"
        target="_blank"
        rel="noreferrer noopener"
      >
        TRDC Chart
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
