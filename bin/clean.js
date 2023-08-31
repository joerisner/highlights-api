import { rm } from 'fs';

const removeList = ['./test/api/report', './test/api/test-results'];

const removeItem = item => {
  rm(item, { force: true, recursive: true }, error => {
    if (error) console.error(error);
  });
};

removeList.forEach(item => removeItem(item));
