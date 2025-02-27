import Image from 'next/image';
import userIcon from '../../../public/assets/images/giftd-progress-bar/user-icon.svg';
import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';

const customLoader = ({ src }: any) => {
  return src;
};

const SuperUser = (): JSX.Element => {
  return (
    <>
      <div className={contentStyles['content__double-col-left']}>
        <Image loader={customLoader} src={userIcon} alt={'user icon'} />
        <h1>
          “I want to see my impact on contributing to the growing community of
          gifting”
        </h1>
      </div>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          Through our use of the Hook Model and previous user research, we
          developed <b>3 assumptions</b> about what is important to users in
          terms of seeing progress and the impact they want to have as
          ambassadors.
        </p>
        <p>
          <b>
            Although these assumptions were based on data from previous
            research, we decided to validate them with our primary users
          </b>{' '}
          before beginning the design process.
        </p>
        <p>What we’ve learned by reaching out to +20 Giftd ambassadors:</p>
        <p className={`${empathizeStyles['percentage']}`}>90%</p>
        <p>Our users are most incentivized by their environmental impact</p>
        <p>
          Our users want to see the wider community impact they have by inviting
          others and growing their community
        </p>
        <p className={`${empathizeStyles['percentage']}`}>10%</p>
        <p>
          Our users are less interested in seeing how friends of friends are
          making an impact
        </p>
      </div>
    </>
  );
};

export default SuperUser;
