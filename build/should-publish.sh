PENDING_CS=$(ls ./.changeset --ignore 'README.md' | grep '.*\.md$' || true)
if [ -z "$PENDING_CS" ]
then
  echo "No pending changesets, skip publishing"
  SHOULD_PUBLISH=false
else
  echo "Pending changesets found, publish"
  SHOULD_PUBLISH=true
fi
