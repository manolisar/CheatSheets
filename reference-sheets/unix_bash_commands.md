# Unix/Bash Commands Reference for macOS

## File and Directory Operations

### Navigation
```bash
pwd                    # Print working directory
ls                     # List files and directories
ls -la                 # List with details (long format, including hidden files)
ls -lh                 # List with human-readable file sizes
cd /path/to/directory  # Change directory
cd ~                   # Go to home directory
cd ..                  # Go up one directory
cd -                   # Go to previous directory
```

### File Operations
```bash
touch filename         # Create empty file or update timestamp
cp source destination  # Copy file
cp -r source dest      # Copy directory recursively
mv old_name new_name   # Move/rename file or directory
rm filename            # Delete file
rm -r directory        # Delete directory recursively
rm -rf directory       # Force delete directory (be careful!)
mkdir dirname          # Create directory
mkdir -p path/to/dir   # Create directory with parent directories
rmdir dirname          # Remove empty directory
```

### File Content
```bash
cat filename           # Display file content
less filename          # View file content page by page
head filename          # Show first 10 lines
head -n 20 filename    # Show first 20 lines
tail filename          # Show last 10 lines
tail -n 20 filename    # Show last 20 lines
tail -f filename       # Follow file changes in real-time
wc filename            # Word, line, character count
wc -l filename         # Line count only
```

## Text Processing

### Search and Filter
```bash
grep "pattern" file    # Search for pattern in file
grep -r "pattern" dir  # Recursive search in directory
grep -i "pattern" file # Case-insensitive search
grep -n "pattern" file # Show line numbers
grep -v "pattern" file # Show lines NOT matching pattern
find . -name "*.txt"   # Find files by name pattern
find . -type f -name "pattern"  # Find files matching pattern
locate filename        # Quick file search (uses database)
```

### Text Manipulation
```bash
sort filename          # Sort lines alphabetically
sort -n filename       # Sort numerically
sort -r filename       # Reverse sort
uniq filename          # Remove duplicate lines
uniq -c filename       # Count occurrences
cut -d',' -f1 file.csv # Cut first column (comma-separated)
awk '{print $1}' file  # Print first column (space-separated)
sed 's/old/new/g' file # Replace 'old' with 'new' globally
```

## Process Management

### Viewing Processes
```bash
ps                     # Show current processes
ps aux                 # Show all processes with details
top                    # Real-time process viewer
htop                   # Enhanced process viewer (if installed)
pgrep process_name     # Find process ID by name
jobs                   # Show active jobs
```

### Controlling Processes
```bash
command &              # Run command in background
nohup command &        # Run command immune to hangups
kill PID               # Terminate process by ID
kill -9 PID            # Force kill process
killall process_name   # Kill all processes by name
fg                     # Bring background job to foreground
bg                     # Send job to background
Ctrl+C                 # Interrupt current process
Ctrl+Z                 # Suspend current process
```

## System Information

### System Status
```bash
date                   # Show current date and time
uptime                 # System uptime and load
whoami                 # Current username
id                     # User and group IDs
uname -a               # System information
df -h                  # Disk usage (human-readable)
du -sh directory       # Directory size
free -h                # Memory usage (on Linux; use vm_stat on macOS)
vm_stat                # Memory statistics (macOS)
```

### Hardware and Network
```bash
lscpu                  # CPU information (Linux)
system_profiler SPHardwareDataType  # Hardware info (macOS)
ifconfig               # Network interface configuration
ping hostname          # Test network connectivity
netstat -an            # Show network connections
lsof -i :port          # Show what's using a specific port
```

## File Permissions and Ownership

### Permissions
```bash
chmod 755 filename     # Set permissions (rwxr-xr-x)
chmod +x filename      # Make executable
chmod -w filename      # Remove write permission
chmod u+rwx filename   # Give user read, write, execute
chown user:group file  # Change ownership
chgrp group filename   # Change group ownership
```

### Permission Codes
- r (read) = 4
- w (write) = 2  
- x (execute) = 1
- 755 = rwxr-xr-x (owner: rwx, group: r-x, others: r-x)
- 644 = rw-r--r-- (owner: rw-, group: r--, others: r--)

## Archives and Compression

### Tar Archives
```bash
tar -czf archive.tar.gz directory/  # Create compressed archive
tar -xzf archive.tar.gz             # Extract compressed archive
tar -tf archive.tar.gz              # List archive contents
tar -xzf archive.tar.gz -C /dest/   # Extract to specific directory
```

### Other Compression
```bash
zip -r archive.zip directory/       # Create ZIP archive
unzip archive.zip                   # Extract ZIP archive
gzip filename                       # Compress file with gzip
gunzip filename.gz                  # Decompress gzip file
```

## Environment and Variables

### Environment Variables
```bash
env                    # Show all environment variables
echo $PATH             # Show PATH variable
export VAR=value       # Set environment variable
export PATH=$PATH:/new/path  # Add to PATH
unset VAR              # Remove variable
source ~/.bashrc       # Reload bash configuration
which command          # Show command location
type command           # Show command type
```

### Shell History
```bash
history                # Show command history
history | grep pattern # Search command history
!!                     # Repeat last command
!n                     # Repeat command number n
!string                # Repeat last command starting with string
Ctrl+R                 # Reverse search through history
```

## Network and Remote

### SSH and Remote Access
```bash
ssh user@hostname      # Connect to remote server
ssh -p port user@host  # Connect using specific port
scp file user@host:/path  # Copy file to remote server
scp user@host:/path/file .  # Copy file from remote server
rsync -av source/ dest/  # Sync directories
```

### Downloads
```bash
curl -O url            # Download file
curl -L url            # Follow redirects
wget url               # Download file (if wget is installed)
```

## macOS Specific Commands

### System Operations
```bash
open filename          # Open file with default application
open .                 # Open current directory in Finder
pbcopy < file          # Copy file contents to clipboard
pbpaste > file         # Paste clipboard to file
say "text"             # Text-to-speech
screencapture file.png # Take screenshot
```

### Package Management (Homebrew)
```bash
brew install package   # Install package
brew update            # Update Homebrew
brew upgrade           # Upgrade packages
brew list              # List installed packages
brew search package    # Search for package
brew uninstall package # Remove package
```

## Useful Shortcuts and Tips

### Keyboard Shortcuts
- `Tab` - Auto-complete commands and filenames
- `Ctrl+C` - Interrupt current command
- `Ctrl+D` - Exit shell or end input
- `Ctrl+L` - Clear screen
- `Ctrl+A` - Move to beginning of line
- `Ctrl+E` - Move to end of line
- `Ctrl+U` - Delete from cursor to beginning of line
- `Ctrl+K` - Delete from cursor to end of line

### Command Combinations
```bash
command1 && command2   # Run command2 only if command1 succeeds
command1 || command2   # Run command2 only if command1 fails
command1; command2     # Run both commands sequentially
command1 | command2    # Pipe output of command1 to command2
command > file         # Redirect output to file (overwrite)
command >> file        # Redirect output to file (append)
command 2>&1           # Redirect stderr to stdout
command < file         # Use file as input
```

### Aliases
```bash
alias ll='ls -la'      # Create alias
alias grep='grep --color=auto'
unalias ll             # Remove alias
```

This reference covers the most commonly used Unix/bash commands for macOS terminal usage. Keep this handy for quick reference!