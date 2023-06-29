type Props = {
  firstName: string;
  lastName: string;
  userJob: string;
};

const Hero = async ({ firstName, lastName, userJob }: Props) => {
  return (
    <section className='py-36 px-0'>
      <h1 className='text-4xl largeMobile:text-5xl smallTablet:text-6xl largeTablet:text-7xl font-extralight'>
        <strong className='font-semibold'>{firstName}</strong> {lastName}
      </h1>
      <h2 className='text-lg mt-2 ml-1 largeTablet:text-2xl smallTablet:text-xl font-normal'>
        {userJob}
      </h2>
    </section>
  );
};

export default Hero;
