import './styles.css';

type Props = {
  onNextPage: Function;
}

export default function ButtonNexPage({ onNextPage }: Props) {
  return (
    <div className="dsc-btn-next-page" onClick={() => onNextPage()}>Carregar mais</div>
  );
}