import React from 'react'
import { Flex, Text, Heading, Image } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import AllBunniesImage from '../../pngs/all-bunnies.png'
import { Heading1Text, Heading2Text } from '../CompetitionHeadingText'

const TextStyles = (theme) => `
  text-align: center;
  ${theme.mediaQueries.md} {
    text-align: left;
  }
`

const ImageWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const StyledText = styled(Text)`
  ${({ theme }) => TextStyles(theme)}
`

const StyledHeading1Text = styled(Heading1Text)`
  ${({ theme }) => TextStyles(theme)}
`

const StyledHeading2Text = styled(Heading2Text)`
  ${({ theme }) => TextStyles(theme)}
`

const StyledHeading = styled(Heading)`
  ${({ theme }) => TextStyles(theme)}
`

const BattleBanner = () => {
  const TranslateString = useI18n()
  return (
    <Flex flexDirection="column">
      <ImageWrapper>
        <Image src={AllBunniesImage} alt="all the bunnies" width={1208} height={659} responsive />
      </ImageWrapper>
      <StyledText mb="16px" color="textSubtle" fontWeight="bold">
        {TranslateString(999, 'April')} 07—14, 2021
      </StyledText>
      <StyledHeading1Text>{TranslateString(999, 'Easter Battle')}</StyledHeading1Text>
      <StyledHeading2Text background="linear-gradient(180deg, #FFD800 0%, #EB8C00 100%)" fill>
        {TranslateString(999, '$200,000 in Prizes!')}
      </StyledHeading2Text>
      <StyledHeading size="md" color="inputSecondary" mt="16px">
        {TranslateString(999, 'Compete with other teams for the highest trading volume!')}
      </StyledHeading>
    </Flex>
  )
}

export default BattleBanner
