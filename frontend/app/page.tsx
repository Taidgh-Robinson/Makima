import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Sample } from '../components/Sample/Sample'

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Sample />
      <ColorSchemeToggle />
    </>
  );
}
