if [ -z "$CI" ]
then
  pnpm husky install
else
  echo "Skipping husky install in CI environment"
fi
