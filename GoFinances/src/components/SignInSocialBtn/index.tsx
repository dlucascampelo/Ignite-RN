import React from 'react'
import {
  Button,
  IconContainer,
  Title,
} from './styles'

import { TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>
}

export function SignInSocialBtn({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <IconContainer>
        <Svg />
      </IconContainer>

      <Title>
        {title}
      </Title>
    </Button>
  )
}
