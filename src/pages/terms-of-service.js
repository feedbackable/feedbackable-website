import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

import {
  SimpleGrid,
  Text,
  Box,
  Flex,
  Button,
  Stack,
  Container,
  VStack,
  OrderedList,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react"

import FooterCTA from "../components/FooterCTA"

const Copy = {
  fontSize: "lg",
  sx: {
    a: {
      color: "purple.500",
      _hover: {
        color: "purple.600",
        textDecoration: "underline",
      },
    },
    p: {
      mb: "3",
    },
  },
}

const TOSPage = () => {
  return (
    <Layout>
      <SEO title="Terms of Service" />
      <VStack
        spacing={[10, null, 20, 40]}
        py={[10, null, 20, 40]}
        sx={{ "&>*": { minWidth: "100%" } }}
      >
        <section className="section-copy">
          <Container maxW="container.lg">
            <VStack spacing={[5, null, null, 8]} {...Copy}>
              <Box minW="100%">
                <VStack spacing="5">
                  <Text as="h1" fontSize="4xl" textAlign="center">
                    Feedbackable Terms of Service
                  </Text>
                  <Text fontSize="2xl">Effective date: 2 March, 2021</Text>
                </VStack>
              </Box>
              <p>
                Please read these Terms of Service (Terms) carefully before
                using the Feedbackable Websites and Services.
                <br />
                If you continue to browse and use this website you are agreeing
                to comply with and be bound by the following terms and
                conditions of use, which together with our privacy policy and
                website disclaimer, govern feedbackable.io's relationship with
                you in relation to your use of this website. By using this
                website, you signify your acceptance of these terms and
                conditions of use. For the purposes of these terms and
                conditions, "Us", "Our" and "We" refers to
                <a href="https://feedbackable.io">
                  https://feedbackable.io
                </a>{" "}
                &amp;{" "}
                <a href="https://feedbackable.app">https://feedbackable.app</a>{" "}
                which collectively comprise the "Service" and/or the
                "Website/s", and "You" and "Your" refers to you, the client,
                visitor, website user or person using our website.
              </p>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Modification or amendment of terms
                </Text>
                <Box>
                  We reserve the right to change, modify, add or remove portions
                  of these terms at any time. Please check these terms regularly
                  prior to using our website to ensure you are aware of any
                  changes. If we modify these terms, we will post the revised
                  terms on the website and update the "Effective date" at the
                  top of these Terms. If you choose to use our website then we
                  will regard that use as conclusive evidence of your agreement
                  and acceptance that these terms govern your and
                  feedbackable.io's rights and obligations to each other.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Limitation of liability
                </Text>
                <Box>
                  By using our website &amp; Service you agree and accept that
                  feedbackable.io is not legally responsible for any loss or
                  damage (including, without limitation, damages for loss of
                  data or revenue, or due to business interruption) you might
                  suffer related to your use of the Websites or Service, whether
                  from errors or from omissions in our documents or information,
                  any goods or services we may offer or from any other use of
                  the Websites. This also includes any situation where
                  feedbackable.io or it's authorised representative has been
                  notified orally or in writing of the possibility of such
                  damage. Your use of any information or materials on this
                  Website is entirely at your own risk, for which we shall not
                  be liable. It shall be your own responsibility to ensure that
                  any products, services or information available through this
                  Website meet your specific, personal requirements. You
                  acknowledge that such information and materials may contain
                  inaccuracies or errors and we expressly exclude liability for
                  any such inaccuracies or errors to the fullest extent
                  permitted by law.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Competition and Consumer Act
                </Text>
                <Box>
                  For the purposes of Schedule 2 of the Australian Consumer Law,
                  in particular Sections 51 to 53, 64 and 64A of Part 3-2,
                  Division 1, Subdivision A of the Competition and Consumer Act
                  2010 (Cth), feedbackable.io's liability for any breach of a
                  term of this agreement is limited to: the supplying of the
                  goods or services to you again; the replacement of the goods;
                  or the payment of the cost of having the goods or services
                  supplied to you again. You must be over 18 years of age to use
                  this Website and to purchase any goods or services.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Refunds
                </Text>
                <Box>
                  feedbackable.io processes refunds in accordance with the
                  Australian Consumer Protection legislation. If you are unhappy
                  with our Service at any time, please log in to your account
                  and cancel any further payments. You can cancel at any time
                  and make no further payments. If you have experienced a
                  problem or fault with the Service, please contact us directly
                  as soon as possible and we will endeavor to address your
                  issue.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Subscriptions
                </Text>
                <Box>
                  <p>
                    When you register for a subscription, you expressly
                    acknowledge and agree that (a) feedbackable.io (or our third
                    party payment processor) is authorised to charge you on the
                    frequency of payments you most recently selected (e.g. every
                    month, or every year) for your subscription for as long as
                    your subscription continues, and (b) your subscription is
                    continuous until you cancel it or we suspend or stop
                    providing access to the sites or products in accordance with
                    these terms. You may cancel your subscription at any time,
                    subject to the terms set forth on our site and herein.
                  </p>
                  {/* You will be sent an automated
                  email two (2) days before your next renewal to notify you that
                  you are due to be billed again soon. For reasons outside of
                  our control, these emails may occasionally end up in your Spam
                  folder. To avoid this, please add support@feedbackable.io as a
                  contact in your mail provider. We cannot take any
                  responsibility for missed notifications, so please take note
                  of your renewal schedule. The renewal dates are based on
                  calendar month: e.g. if you sign up for a monthly subscription on
                  March 12, your next renewal will be on April 12, and you can
                  expect a renewal notification on or before April 10. */}
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Price &amp; payment terms
                </Text>
                <Box>
                  The Price will be determined in accordance with the
                  subscription plan chosen by you. The Price will be charged
                  immediately at the subscription by you to your credit card.
                  Payments will be processed via a third party payment
                  processor. You will receive a confirmation email for the
                  subscription plan. feedbackable.io has the right to modify the
                  Price of the subscription plans, at any time, without prior
                  notice. With respect to ongoing subscription plans, the new
                  Price will be applicable to you only in case of renewal of
                  your subscription plan. If you are unhappy with any changes to
                  our Pricing or Service at any time, please log in to your
                  account and cancel any further payments. Should you fail to
                  proceed to the payment of the Price, feedbackable.io reserves
                  the right to deny or limit access to the service to you.
                  feedbackable.io, without waiving any other right or remedy and
                  without incurring liability to you, may suspend or terminate
                  all or part of the Service until all outstanding amounts are
                  paid in full. feedbackable.io is entitled to all reasonable
                  legal and associated costs of recovering overdue amounts.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Accuracy of materials &amp; links to other sites
                </Text>
                <Box>
                  <p>
                    The materials appearing on feedbackable.io's Websites could
                    include technical, typographical, or photographic errors.
                    feedbackable.io does not warrant that any of the materials
                    on its Website are accurate, complete or current.
                    feedbackable.io may make changes to the materials contained
                    on its Websites at any time without notice. However
                    feedbackable.io does not make any commitment to update the
                    materials.
                  </p>
                  <p>
                    {" "}
                    feedbackable.io may from time to time provide on its
                    website, links to other websites and information on those
                    websites for your convenience. This does not necessarily
                    imply sponsorship, endorsement, or approval or arrangement
                    between feedbackable.io and the owners of those websites.
                    feedbackable.io takes no responsibility for any of the
                    content found on the linked websites. feedbackable.io's
                    Websites may contain information provided by third parties
                    for which feedbackable.io accepts no responsibility
                    whatsoever for information or advice provided to you
                    directly by third parties. We are making a 'recommendation'
                    only and are not providing any advice nor do we take any
                    responsibility for any advice received in this regard.
                  </p>
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Disclaimer
                </Text>
                <Box>
                  To the fullest extent permitted by law, feedbackable.io
                  absolutely disclaims all warranties, expressed or implied,
                  including, but not limited to, implied warranties of
                  merchantability and fitness for any particular purpose.
                  feedbackable.io gives no warranty that the documents, goods or
                  services will be free of errors, or that defects will be
                  corrected, or that our website or its server is free of
                  viruses or any other harmful components. Whilst we, at all
                  times endeavour to have the most accurate, reliable and
                  up-to-date information on our website, we do not warrant or
                  make any representations regarding the use or the result of
                  the use of any document, product, service, link or information
                  in its website or as to their correctness, suitability,
                  accuracy, reliability, or otherwise. It is your sole
                  responsibility and not the responsibility of feedbackable.io
                  to bear any entire costs of servicing, repairs, or correction.
                  The applicable law in your state or territory may not permit
                  these exclusions, particularly the exclusions of some implied
                  warranties. Some of the above may not apply to you but you
                  must ensure you are aware of any risk you may be taking by
                  using this website or any products or services that may be
                  offered through it. It is your responsibility to do so.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Exclusion of unenforceable terms
                </Text>
                <Box>
                  Where any clause or term above would, by any applicable
                  statute, be illegal, void, or unenforceable in any State or
                  Territory then such a clause shall not apply in that State or
                  Territory and shall be deemed never to have been included in
                  these terms and conditions in that State or Territory. Such a
                  clause if legal and enforceable in any other State or
                  Territory shall continue to be fully enforceable and part of
                  this agreement in those other States and Territories. The
                  deemed exclusion of any term pursuant to this paragraph shall
                  not affect or modify the full enforceability and construction
                  of the other clauses of these terms and conditions.
                </Box>
              </VStack>
              <VStack spacing="5">
                <Text as="h2" fontSize="2xl">
                  Jurisdiction
                </Text>
                <Box>
                  This agreement and this website are subject to the laws of
                  Tasmania and Australia. If there is a dispute between you and
                  feedbackable.io that results in litigation then you must
                  submit to the jurisdiction of the courts of Tasmania.
                </Box>
              </VStack>
            </VStack>
          </Container>
        </section>
        <section className="section-final-cta">
          <FooterCTA />
        </section>
      </VStack>
    </Layout>
  )
}

export default TOSPage
