# Check if file or dir exists

## Usage

Given that there is `./album.txt` on the disk.

```bash
# Check if album.txt exists
if-exist ./album.txt && echo "album exists"

# Check if phone.txt does not exist
if-exist ./phone.txt || echo "phone does not exist"

# Create phone.txt if does not exist
if-exist -n ./phone.txt && echo "+12345" > phone.txt
```
