import { Container, IconWrapper, Value, Label } from './styles'

interface StatCardProps {
  icon: string // caminho da imagem
  value: string | number
  label: string
  purple?: boolean // deixa o fundo roxo se true
}

export default function StatCard({ icon, value, label, purple }: StatCardProps) {
  return (
    <Container $purple={purple}>
      <div className="flex">
        <IconWrapper $purple={purple}>
          <img src={icon} alt="" />
        </IconWrapper>

        <Value $purple={purple}>{value}</Value>
      </div>
      <Label $purple={purple}>{label}</Label>
    </Container>
  )
}
