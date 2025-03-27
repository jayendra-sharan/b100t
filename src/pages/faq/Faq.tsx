import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

type FAQItem = {
  id: string;
  question: string;
  answer: string; // HTML string
};

export const Faq = () => {
  const { i18n, t } = useTranslation();
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    const lang = i18n.language || 'en';
    fetch(`/locales/${lang}/faq.json`)
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error('Failed to load FAQ:', err));
  }, [i18n.language]);

  return (
    <Box maxWidth="md" mx="auto" p={2} color="#ffffff">
      <Typography variant="h4" component="h1" gutterBottom>
        {t('faq_heading')}
      </Typography>
      {faqs.map(({ id, question, answer }) => (
        <Box component="section" id={id} key={id} mb={4}>
          <Typography
            variant="h6"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            {question}
          </Typography>
          <Typography
            component="div"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </Box>
      ))}
    </Box>
  );
};
