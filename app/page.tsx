import Hero from '@/components/home/Hero';
import LoanProducts from '@/components/home/LoanProducts';
import EligibilityChecker from '@/components/home/EligibilityChecker';
import Process from '@/components/home/Process';
import TrustSignals from '@/components/home/TrustSignals';

export default function Home() {
  return (
    <>
      <Hero />
      <LoanProducts />
      <EligibilityChecker />
      <Process />
      <TrustSignals />
    </>
  );
}
