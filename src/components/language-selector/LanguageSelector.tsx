import React from 'react';
import { useTranslation } from 'react-i18next';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

// Define your language options with codes, labels, and emoji flags.
interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode,
  ) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel
        id="language-selector-label"
        sx={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}
      >
        <LanguageIcon fontSize="small" style={{ marginRight: 4 }} />
        Language
      </InputLabel>
      <Select
        labelId="language-selector-label"
        value={currentLanguage}
        onChange={handleChange}
        label="Language"
        sx={{ color: '#ffffff', borderColor: '#ffffff' }}
        MenuProps={{ disableAutoFocusItem: true }}
        renderValue={(selected) => {
          const selectedLang = languages.find((lang) => lang.code === selected);
          return `${selectedLang?.flag} ${selectedLang?.label}`; // Keep it simple
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            <Box display="flex" alignItems="center">
              <span style={{ marginRight: 8 }}>{lang.flag}</span>
              <Typography variant="body2">{lang.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
