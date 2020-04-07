import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'services/i18n'
import Shell from 'components/coronamail/Shell'

const Legal: NextPage<{}> = () => {
  const { t } = useTranslation()
  return (
    <Shell
      title={t('legal', 'seo-title')}
      description={t('legal', 'seo-description')}
    >
      <style jsx global>{`
        h2 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        h3 {
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
        }
        p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        a {
          color: blue;
          text-decoration: underline;
        }
      `}</style>
      <div className='w-full max-w-5xl mx-auto'>
        <h2 id='tos'>
          <strong>TERMS OF SERVICE</strong>
        </h2>
        <h3>
          <strong>1. Terms</strong>
        </h3>
        <p>
          By accessing the website at{' '}
          <a href='http://coronamail.org'>http://coronamail.org</a>, you are
          agreeing to be bound by these terms of service, all applicable laws
          and regulations, and agree that you are responsible for compliance
          with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </p>
        <h3>
          <strong>2. Use Licence</strong>
        </h3>
        <ol type='a'>
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on CoronaMail's website for
            personal, non-commercial transitory viewing only. This is the grant
            of a licence, not a transfer of title, and under this licence you
            may not:
            <ol type='i'>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on CoronaMail's website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This licence shall automatically terminate if you violate any of
            these restrictions and may be terminated by CoronaMail at any time.
            Upon terminating your viewing of these materials or upon the
            termination of this licence, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </li>
        </ol>
        <h3>
          <strong>3. Disclaimer</strong>
        </h3>
        <ol type='a'>
          <li>
            The materials on CoronaMail's website are provided on an 'as is'
            basis. CoronaMail makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </li>
          <li>
            Further, CoronaMail does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </li>
        </ol>
        <h3>
          <strong>4. Limitations</strong>
        </h3>
        <p>
          In no event shall CoronaMail or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on CoronaMail's website, even if
          CoronaMail or a CoronaMail authorised representative has been notified
          orally or in writing of the possibility of such damage. Because some
          jurisdictions do not allow limitations on implied warranties, or
          limitations of liability for consequential or incidental damages,
          these limitations may not apply to you.
        </p>
        <h3>
          <strong>5. Accuracy of materials</strong>
        </h3>
        <p>
          The materials appearing on CoronaMail's website could include
          technical, typographical, or photographic errors. CoronaMail does not
          warrant that any of the materials on its website are accurate,
          complete or current. CoronaMail may make changes to the materials
          contained on its website at any time without notice. However
          CoronaMail does not make any commitment to update the materials.
        </p>
        <h3>
          <strong>6. Links</strong>
        </h3>
        <p>
          CoronaMail has not reviewed all of the sites linked to its website and
          is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by CoronaMail of the
          site. Use of any such linked website is at the user's own risk.
        </p>
        <h3>
          <strong>7. Modifications</strong>
        </h3>
        <p>
          CoronaMail may revise these terms of service for its website at any
          time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </p>
        <h3>
          <strong>8. Governing Law</strong>
        </h3>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Catalonia (Spain) and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
        <h3>
          <strong>9.Translation Interpretation</strong>
        </h3>
        <p>
          These terms and conditions may have been translated to your language.
          We have made them available under explicit request.
        </p>
        <p>
          You agree that the original English text shall prevail in the case of
          a dispute.
        </p>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
        <h2 id='privacy'>
          <strong>PRIVACY POLICY</strong>
        </h2>
        <p>
          <strong>Last updated March 31, 2020</strong>
        </p>
        <p>
          <br />
        </p>
        <p>
          Thank you for choosing to be part of our community at CoronaMail (“
          <strong>Company</strong>”, “<strong>we</strong>”, “<strong>us</strong>
          ”, or “<strong>our</strong>”). We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about our policy, or our practices with regards
          to your personal information, please contact us at
          support@coronamail.com.
        </p>
        <p>
          When you visit our website
          <a href='https://coronamail.org'>https://coronamail.org</a>, and use
          our services, you trust us with your personal information. We take
          your privacy very seriously. In this privacy policy, we seek to
          explain to you in the clearest way possible what information we
          collect, how we use it and what rights you have in relation to it. We
          hope you take some time to read through it carefully, as it is
          important. If there are any terms in this privacy policy&nbsp;that you
          do not agree with, please discontinue use of our Sites and our
          services.
        </p>
        <p>
          This privacy policy&nbsp;applies to all information collected through
          our website (such as{' '}
          <a href='https://coronamail.org'>https://coronamail.org</a>), and/or
          any related services, sales, marketing or events (we refer to them
          collectively in this privacy policy&nbsp;as the "
          <strong>Services</strong>").
        </p>
        <p>
          <strong>
            Please read this privacy policy&nbsp;carefully as it will help you
            make informed decisions about sharing your personal information with
            us.
          </strong>
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>OUR POLICY IN SHORT</strong>
        </h3>
        <p>
          <br />
        </p>
        <p>
          Your privacy is important to us. It is CoronaMail's policy to respect
          your privacy regarding any information we may collect from you across
          our website, <a href='http://coronamail.org'>http://coronamail.org</a>
          , and other sites we own and operate.
        </p>
        <p>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>
        <p>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </p>
        <p>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </p>
        <p>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </p>
        <p>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>
        <p>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>1. WHAT INFORMATION DO WE COLLECT?</strong>
        </h3>
        <br />
        <strong>Personal information you disclose to us</strong>
        <p>
          <strong>In Short: &nbsp;</strong>We collect personal information that
          you provide to us.
        </p>
        <p>
          We collect personal information that you voluntarily provide to us
          when registering at the Services expressing an interest in obtaining
          information about us or our products and services, when participating
          in activities on the Services (such as posting messages in our online
          forums or entering competitions, contests or giveaways) or otherwise
          contacting us.
        </p>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make and
          the products and features you use. The personal information we collect
          can include the following:
        </p>
        <p>
          <strong>Publicly Available Personal Information.</strong>&nbsp;We
          collect first name, maiden name, last name, and nickname; email
          addresses; and other similar data.&nbsp;
        </p>
        <p>
          <strong>Personal Information Provided by You.</strong>&nbsp;We collect
          data held by a hospital or doctor; data about health, DNA, medical
          records, FitBit, and similar apps; and other similar data.
        </p>
        <p>
          All personal information that you provide to us must be true, complete
          and accurate, and you must notify us of any changes to such personal
          information.
        </p>
        <p>
          <strong>
            <br />
            Information automatically collected
          </strong>
        </p>
        <p>
          <strong>In Short:&nbsp;&nbsp;&nbsp;</strong>Some information — such as
          IP address and/or browser and device characteristics — is collected
          automatically when you visit our Services.
        </p>
        <p>
          We automatically collect certain information when you visit, use or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>2. HOW DO WE USE YOUR INFORMATION?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>We process your information for
          purposes based on legitimate business interests, the fulfillment of
          our contract with you, compliance with our legal obligations, and/or
          your consent.
        </p>
        <p>
          We use personal information collected via our Services for a variety
          of business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations. We
          indicate the specific processing grounds we rely on next to each
          purpose listed below.
        </p>
        <p>
          Below are some definitions that will help you understand the roles and
          responsibilities of CoronaMail:
        </p>
        <ul>
          <li>
            <p>
              “data controller” means a person who (either alone or jointly or
              in common with other persons) determines the purposes for which
              and the manner in which any personal information are, or are to be
              used.
            </p>
          </li>
          <li>
            <p>
              “data processor”, in relation to personal information, means any
              person (other than an employee of the data controller) who
              processes the data on behalf of the data controller.
            </p>
          </li>
        </ul>
        <p>
          If you provide the data and the instructions, then you are the data
          controller and CoronaMail is the data processor.
        </p>
        <p>
          If we determine the purposes for which we collect and use your
          personal information, then we are the Controller.
        </p>
        <p>We use the information we collect or receive:</p>
        <ul>
          <li>
            <strong>To facilitate account creation and logon process.</strong>
            &nbsp;If you choose to link your account with us to a third party
            account (such as your Google or Facebook account), we use the
            information you allowed us to collect from those third parties to
            facilitate account creation and logon process for the performance of
            the contract.
            <br />
            <br />
          </li>

          <li>
            <strong>To enable user-to-user communications.</strong>&nbsp;We may
            use your information in order to enable user-to-user communications
            with each user's consent.
          </li>
        </ul>
        <p>
          <br />
        </p>
        <h3>
          <strong>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>We only share information with
          your consent, to comply with laws, to provide you with services, to
          protect your rights, or to fulfill business obligations.
        </p>
        We may process or share data based on the following legal basis:
        <ul>
          <li>
            <strong>Consent:</strong> We may process your data if you have given
            us specific consent to use your personal information in a specific
            purpose.
            <br />
            <br />
          </li>

          <li>
            <strong>Legitimate Interests:</strong> We may process your data when
            it is reasonably necessary to achieve our legitimate business
            interests.
            <br />
            <br />
          </li>

          <li>
            <strong>Performance of a Contract:&nbsp;</strong>Where we have
            entered into a contract with you, we may process your personal
            information to fulfill the terms of our contract.
            <br />
            <br />
          </li>

          <li>
            <strong>Legal Obligations:</strong> We may disclose your information
            where we are legally required to do so in order to comply with
            applicable law, governmental requests, a judicial proceeding, court
            order, or legal process, such as in response to a court order or a
            subpoena (including in response to public authorities to meet
            national security or law enforcement requirements).
            <br />
            <br />
          </li>

          <li>
            <strong>Vital Interests:</strong> We may disclose your information
            where we believe it is necessary to investigate, prevent, or take
            action regarding potential violations of our policies, suspected
            fraud, situations involving potential threats to the safety of any
            person and illegal activities, or as evidence in litigation in which
            we are involved.
          </li>
        </ul>
        <p>
          More specifically, we may need to process your data or share your
          personal information in the following situations:
        </p>
        <ul>
          <li>
            <strong>
              Vendors, Consultants and Other Third-Party Service Providers.
            </strong>
            &nbsp;We may share your data with third party vendors, service
            providers, contractors or agents who perform services for us or on
            our behalf and require access to such information to do that work.
            Examples include: payment processing, data analysis, email delivery,
            hosting services, customer service and marketing efforts. We may
            allow selected third parties to use tracking technology on the
            Services, which will enable them to collect data about how you
            interact with the Services over time. This information may be used
            to, among other things, analyze and track data, determine the
            popularity of certain content and better understand online activity.
            Unless described in this Policy, we do not share, sell, rent or
            trade any of your information with third parties for their
            promotional purposes. We have contracts in place with our data
            processors. This means that they cannot do anything with your
            personal information unless we have instructed them to do it. They
            will not share your personal information with any organisation apart
            from us. They will hold it securely and retain it for the period we
            instruct.
            <br />
            <br />
          </li>

          <li>
            <strong>Business Transfers.</strong>&nbsp;We may share or transfer
            your information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
        </ul>
        <p>
          <br />
        </p>
        <h3>
          <strong>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</strong>
        </h3>
        <strong>In Short:&nbsp;&nbsp;</strong>We only share information with the
        following third parties. &nbsp;&nbsp; We only share and disclose your
        information with the following third parties. We have categorized each
        party so that you may be easily understand the purpose of our data
        collection and processing practices. If we have processed your data
        based on your consent and you wish to revoke your consent, please
        contact us.
        <ul>
          <li>
            <strong>Web and Mobile Analytics</strong>
            <br />
            Google Analytics
          </li>
        </ul>
        <p>
          <br />
        </p>
        <h3>
          <strong>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>We may use cookies and other
          tracking technologies to collect and store your information.
        </p>
        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Policy.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>6. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>We keep your information for as
          long as necessary to fulfill the purposes outlined in this privacy
          policy&nbsp;unless otherwise required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy policy, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this policy
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize it, or, if
          this is not possible (for example, because your personal information
          has been stored in backup archives), then we will securely store your
          personal information and isolate it from any further processing until
          deletion is possible.
        </p>
        <br />
        <h3>
          <strong>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>We aim to protect your personal
          information through a system of organizational and technical security
          measures.
        </p>
        <p>
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, please also remember that we cannot guarantee
          that the internet itself is 100% secure. Although we will do our best
          to protect your personal information, transmission of personal
          information to and from our Services is at your own risk. You should
          only access the services within a secure environment.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>8. DO WE COLLECT INFORMATION FROM MINORS?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>We do not knowingly collect data
          from or market to children under 18 years of age.
        </p>
        <p>
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent’s use of the Services. If we learn
          that personal information from users less than 18 years of age has
          been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we have collected from children under age 18, please
          contact us at support@coronamail.org.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>9. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>In some regions, such as the
          European Economic Area, you have rights that allow you greater access
          to and control over your personal information. You may review, change,
          or terminate your account at any time.
        </p>
        <p>
          In some regions (like the European Economic Area), you have certain
          rights under applicable data protection laws. These may include the
          right (i) to request access and obtain a copy of your personal
          information, (ii) to request rectification or erasure; (iii) to
          restrict the processing of your personal information; and (iv) if
          applicable, to data portability. In certain circumstances, you may
          also have the right to object to the processing of your personal
          information. To make such a request, please use the&nbsp;
          <a href='#contact'>contact details</a>
          &nbsp;provided below. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </p>
        <p>
          If we are relying on your consent to process your personal
          information, you have the right to withdraw your consent at any time.
          Please note however that this will not affect the lawfulness of the
          processing before its withdrawal.
        </p>
        <p>
          If you are resident in the European Economic Area and you believe we
          are unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here:&nbsp;
          <a href='http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'>
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </a>
          .
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may
          email us at support@coronamail.org.
        </p>
        <br />
        <strong>Account Information</strong>
        <p>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </p>
        <p>
          &nbsp; &nbsp; ■ &nbsp;Log into your account settings and update your
          user account.
        </p>
        <p>
          &nbsp; &nbsp; ■ &nbsp;Contact us using the contact information
          provided.
        </p>
        <p>
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, some information may be retained in our files to prevent
          fraud, troubleshoot problems, assist with any investigations, enforce
          our Terms of Use and/or comply with legal requirements.
        </p>
        <p>
          <strong>Cookies and similar technologies:&nbsp;</strong>Most Web
          browsers are set to accept cookies by default. If you prefer, you can
          usually choose to set your browser to remove cookies and to reject
          cookies. If you choose to remove cookies or reject cookies, this could
          affect certain features or services of our Services. To opt-out of
          interest-based advertising by advertisers on our Services visit&nbsp;
          <a href='http://www.aboutads.info/choices/'>
            http://www.aboutads.info/choices/
          </a>
          .
        </p>
        <p>
          <strong>Opting out of email marketing:&nbsp;</strong>You can
          unsubscribe from our marketing email list at any time by clicking on
          the unsubscribe link in the emails that we send or by contacting us
          using the details provided below. You will then be removed from the
          marketing email list – however, we will still need to send you
          service-related emails that are necessary for the administration and
          use of your account. To otherwise opt-out, you may:
        </p>
        <p>
          &nbsp; &nbsp; ■ &nbsp;Contact us using the contact information
          provided.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>10. DATA BREACH</strong>
        </h3>
        <p>
          A privacy breach occurs when there is unauthorized access to or
          collection, use, disclosure or disposal of personal information. You
          will be notified about data breaches when CoronaMail believes you are
          likely to be at risk or serious harm. For example, a data breach may
          be likely to result in serious financial harm or harm to your mental
          or physical well-being. In the event that CoronaMail becomes aware of
          a security breach which has resulted or may result in unauthorized
          access, use or disclosure of personal information CoronaMail will
          promptly investigate the matter and notify the applicable Supervisory
          Authority not later than 72 hours after having become aware of it,
          unless the personal data breach is unlikely to result in a risk to the
          rights and freedoms of natural persons.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>11. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
        </h3>
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (“DNT”) feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. No uniform
          technology standard for recognizing and implementing DNT signals has
          been finalized. As such, we do not currently respond to DNT browser
          signals or any other mechanism that automatically communicates your
          choice not to be tracked online. If a standard for online tracking is
          adopted that we must follow in the future, we will inform you about
          that practice in a revised version of this privacy policy.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>
            12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>Yes, if you are a resident of
          California, you are granted specific rights regarding access to your
          personal information.
        </p>
        <p>
          California Civil Code Section 1798.83, also known as the “Shine The
          Light” law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a
          registered account with the Services, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below, and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from our systems.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>13. DO WE MAKE UPDATES TO THIS POLICY?</strong>
        </h3>
        <p>
          <strong>In Short:&nbsp;&nbsp;</strong>Yes, we will update this policy
          as necessary to stay compliant with relevant laws.
        </p>
        <p>
          We may update this privacy policy&nbsp;from time to time. The updated
          version will be indicated by an updated “Revised” date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy policy, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy
          policy&nbsp;frequently to be informed of how we are protecting your
          information.
        </p>
        <p>
          <br />
        </p>
        <h3>
          <strong>14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</strong>
        </h3>
        <p>
          If you have questions or comments about this policy, you may email us
          at support@coronamail.org.
        </p>
        <br />
        &nbsp;
        <p>
          If you are a resident in the European Economic Area, the "data
          controller" of your personal information is CoronaMail. CoronaMail has
          appointed Rubén Sospedra to be its representative in&nbsp;the EEA. You
          can contact them directly regarding the processing of your information
          by CoronaMail, by email at hello@sospedra.me.
        </p>
        <p>
          <br />
        </p>
        <p>
          <strong>
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </strong>
        </p>
        Based on the laws of some countries, you may have the right to request
        access to the personal information we collect from you, change that
        information, or delete it in some circumstances. To request to review,
        update, or delete your personal information, please visit:
        support@coronamail.org. We will respond to your request within 30 days.
      </div>
    </Shell>
  )
}

export default Legal
