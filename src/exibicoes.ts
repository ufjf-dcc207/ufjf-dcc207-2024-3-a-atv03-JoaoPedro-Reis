type ExibicaoTuplaType = [string, string, string, Array<AnimaisTuplaType>];
type AnimaisTuplaType = [string, string, number, boolean];
const EXIBICOES: Array<ExibicaoTuplaType> =[
  [
    "A1",
    "2024-12-02T08:00:00.000-03:00",
    "2024-12-02T12:00:03:00",
    [
        ["🦁", "Leão", 190.0, true],
        ["🦩", "Flamingo", 20.0, true],
        ["🦜", "Papagaio", 0.12, false],
    ],
  ],
  [
    "B2",
    "2024-12-06T13:00:00.000-03:00",
    "2024-12-06T17:00:03:00",
    [["🦒", "Girafa", 1200, true]],
  ],
];

export default EXIBICOES;
