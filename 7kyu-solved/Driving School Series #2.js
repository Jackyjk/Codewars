const cost = mins => 30 + (mins > 65 ? Math.ceil((mins - 65) / 30) : 0) * 10
