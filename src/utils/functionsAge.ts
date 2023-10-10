export default function calcDiffTime(created_at: string): string {
  const dataCriacao: Date = new Date(created_at);
  const dataAtual: Date = new Date();
  const diferencaMilissegundos = Math.abs(dataAtual.getTime() - dataCriacao.getTime());

  const segundos = Math.floor(diferencaMilissegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.round(horas / 24);
  const meses = Math.round(dias / 30.44);
  const anos = Math.floor(meses / 12);

  return `${anos} anos, ${meses % 12} meses, ${Math.ceil(dias % 30.44)}
  dias e ${horas % 24} horas`;
}

export const calcAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const currentYear = new Date().getFullYear();
  const birthYear = birthDate.getFullYear();

  const currentMonth = new Date().getMonth() + 1;
  const birthMonth = birthDate.getMonth() + 1;

  const condition = new Date().getDate() < birthDate.getDate();
  if (currentMonth < birthMonth || (currentMonth === birthMonth && condition)) {
    return currentYear - birthYear - 1;
  }

  return currentYear - birthYear;
};
