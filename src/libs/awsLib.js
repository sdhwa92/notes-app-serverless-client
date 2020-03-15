import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  // -- use Storage.vault.put() to store a file into private folder
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}
