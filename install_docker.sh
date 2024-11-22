# Add Docker's official GPG key:
sudo apt-get update -y
sudo apt-get install ca-certificates curl -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose -y

# Verify installation
docker_version=$(docker --version 2>/dev/null)
docker_compose_version=$(docker-compose --version 2>/dev/null)

if [[ -n $docker_version && -n $docker_compose_version ]]; then
    echo -e "\n✅ Docker and Docker Compose are successfully installed!"
    echo "Docker version: $docker_version"
    echo "Docker Compose version: $docker_compose_version"
else
    echo -e "\n❌ Docker or Docker Compose installation failed. Please check for errors."
fi

sudo chown $USER:$USER /var/run/docker.sock
