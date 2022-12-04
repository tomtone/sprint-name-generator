package sw

import (
	"github.com/flostadler/name-generator/pkg/randomizer"
)

var(
	characters = [...] string {
		"Darth Sidious",
		"Ahsoka Tano",
		"Rey Skywalker",
	}
)

func Generate() string {
	return randomizer.GetRandom(characters[:])
}

func GenerateMultiple(count int) []string {
	s := make([]string, count)
	for i := 0;  i <= count; i++ {
		s[i] = Generate()
	}

	return s
}
